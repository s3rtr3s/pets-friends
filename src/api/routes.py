from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Clients, Pets, Services, Contracts, Messages, Images
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
import cloudinary
import cloudinary.uploader


api = Blueprint('api', __name__)


# LOGIN


@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    client = Clients.query.filter(Clients.email == email, Clients.password == password).first()
    print(client)
    if client:
        access_token = create_access_token(identity=email)
        return jsonify(access_token=access_token)
        
    return jsonify({"msg": "Bad email or password"}), 401


# TODO: definir que endpoint necesitan token y aplicarlo.


#  CLIENTS


@api.route('/clients', methods=['GET'])
def get_clients():
    clients = Clients.query.all()
    results = [client.serialize() for client in clients]
    response_body = {'message': 'OK',
                     'total_records': len(results),
                     'results': results}
    return jsonify(response_body), 200


@api.route('/clients/<int:client_id>', methods=['GET'])
def get_client(client_id):
    client = Clients.query.get(client_id)
    result = client.serialize()
    response_body = {'message': 'OK',
                     'result': result}
    return jsonify(response_body), 200


@api.route('/clients', methods=['POST'])
def register_client():
    request_body = request.get_json()
    client = Clients(roles=request_body['roles'],
                     name=request_body['name'],
                     surname=request_body['surname'],
                     email=request_body['email'],
                     password=request_body['password'],
                     avatar=request_body['avatar'],
                     description=request_body['description'],
                     city=request_body['city'])
    db.session.add(client)
    db.session.commit()
    return jsonify(request_body), 200


@api.route('/clients/<int:client_id>', methods=['DELETE'])
def delete_client(client_id):
    client = Clients.query.get(client_id)
    db.session.delete(client)
    db.session.commit()
    return jsonify('OK'), 200


@api.route('/clients/<int:client_id>', methods=['PUT'])
def update_client(client_id):
    client = Clients.query.get(client_id)
    if client is None:
        return 'Not found', 404

    client.roles = request.json.get('roles', client.roles)
    client.name = request.json.get('name', client.name)
    client.surname = request.json.get('surname', client.surname)
    client.email = request.json.get('email', client.email)
    client.password = request.json.get('password', client.password)
    client.avatar = request.json.get('avatar', client.avatar)
    client.description = request.json.get('description', client.description)
    client.city = request.json.get('city', client.city)
    db.session.commit()

    response_body = {'roles': client.roles,
                     'name': client.name,
                     'surname': client.surname,
                     'email': client.email,
                     'password': client.password,
                     'avatar': client.avatar,
                     'description': client.description,
                     'city': client.city}

    return jsonify(response_body), 200


# PETS


@api.route('/pets', methods=['GET'])
def get_pets():
    pets = Pets.query.all()
    results = [pet.serialize() for pet in pets]
    response_body = {'message': 'OK',
                     'total_records': len(results),
                     'results': results}
    return jsonify(response_body), 200


@api.route('/pets/<int:pet_id>', methods=['GET'])
def get_pet(pet_id):
    pet = Pets.query.get(pet_id)
    if pet is None:
        return 'Not found', 404
    result = pet.serialize()
    response_body = {'message': 'OK',
                     'result': result}
    return jsonify(response_body), 200


@api.route('/pets', methods=['POST'])
def register_pet():
    request_body = request.get_json()
    pet = Pets(name=request_body['name'],
               image=request_body['image'],
               description=request_body['description'],
               owner_id=request_body['owner_id'])
    db.session.add(pet)
    db.session.commit()
    return jsonify(request_body), 200


@api.route('/pets/<int:pet_id>', methods=['DELETE'])
def delete_pet(pet_id):
    pet = Pets.query.get(pet_id)
    db.session.delete(pet)
    db.session.commit()
    return jsonify('OK'), 200


@api.route('/pets/<int:pet_id>', methods=['PUT'])
def update_pet(pet_id):
    pet = Pets.query.get(pet_id)
    if pet is None:
        return 'Not found', 404

    pet.name = request.json.get('name', pet.name)
    pet.image = request.json.get('image', pet.image)
    pet.description = request.json.get('description', pet.description)

    db.session.commit()

    response_body = {'id': pet.id,
                     'name': pet.name,
                     'image': pet.image,
                     'description': pet.description,
                     'owner_id': pet.owner_id}

    return jsonify(response_body), 200


# SERVICES


@api.route('/services', methods=['GET'])
def get_services():
    services = Services.query.all()
    results = [service.serialize() for service in services]
    response_body = {'message': 'OK',
                     'total_records': len(results),
                     'results': results}
    return jsonify(response_body), 200


@api.route('/services/<int:service_id>', methods=['GET'])
def get_service(service_id):
    service = Services.query.get(service_id)
    if service is None:
        return 'Not found', 404
    result = service.serialize()
    response_body = {'message': 'OK',
                     'result': result}
    return jsonify(response_body), 200


@api.route('/services', methods=['POST'])
def register_service():
    request_body = request.get_json()
    service = Services(title=request_body['title'],
                       price=request_body['price'],
                       description=request_body['description'],
                       carer_id=request_body['carer_id'])
    db.session.add(service)
    db.session.commit()
    return jsonify(request_body), 200


@api.route('/services/<int:service_id>', methods=['DELETE'])
def delete_service(service_id):
    service = Services.query.get(service_id)
    db.session.delete(service)
    db.session.commit()
    return jsonify('OK'), 200


@api.route('/services/<int:service_id>', methods=['PUT'])
def update_service(service_id):
    service = Services.query.get(service_id)
    if service is None:
        return 'Not found', 404

    service.title = request.json.get('title', service.title)
    service.price = request.json.get('price', service.price)
    service.description = request.json.get('description', service.description)
    service.carer_id = request.json.get('carer_id', service.carer_id)

    db.session.commit()

    response_body = {'id': service.id,
                     'title': service.title,
                     'price': service.price,
                     'description': service.description,
                     'carer_id': service.carer_id}

    return jsonify(response_body), 200


# CONTRACTS


@api.route('/contracts', methods=['GET'])
def get_contracts():
    contracts = Contracts.query.all()
    results = [contract.serialize() for contract in contracts]
    response_body = {'message': 'OK',
                     'total_records': len(results),
                     'results': results}
    return jsonify(response_body), 200


@api.route('/contracts/<int:contract_id>', methods=['GET'])
def get_contract(contract_id):
    contract = Contracts.query.get(contract_id)
    if contract is None:
        return 'Not found', 404
    result = contract.serialize()
    response_body = {'message': 'OK',
                     'result': result}
    return jsonify(response_body), 200


@api.route('/contracts', methods=['POST'])
def register_contract():
    request_body = request.get_json()
    contract = Contracts(pet_id=request_body['pet_id'],
                         service_id=request_body['service_id'],
                         date=request_body['date'],
                         price=request_body['price'])
    db.session.add(contract)
    db.session.commit()
    return jsonify(request_body), 200


@api.route('/contracts/<int:contract_id>', methods=['DELETE'])
def delete_contract(contract_id):
    contract = Contracts.query.get(contract_id)
    db.session.delete(contract)
    db.session.commit()
    return jsonify('OK'), 200


@api.route('/contracts/<int:contract_id>', methods=['PUT'])
def update_contract(contract_id):
    contract = Contracts.query.get(contract_id)
    if contract is None:
        return 'Not found', 404

    contract.pet_id = request.json.get('pet_id', contract.pet_id)
    contract.service_id = request.json.get('service_id', contract.service_id)
    contract.date = request.json.get('date', contract.date)
    contract.price = request.json.get('price', contract.price)
    contract.assessment = request.json.get('assessment', contract.assessment)
    contract.comments = request.json.get('comments', contract.comments)

    db.session.commit()

    response_body = {'id': contract.id,
                     'pet_id': contract.pet_id,
                     'service_id': contract.service_id,
                     'date': contract.date,
                     'price': contract.price,
                     'assessment': contract.assessment,
                     'comments': contract.comments}

    return jsonify(response_body), 200


# IMAGES


@api.route('/upload', methods=['POST'])
def upload_image():
    file = request.files['file']
    if file is None:
        return {"error": "ha ocurrido un error"}, 400
    upload_result = cloudinary.uploader.upload(file)
    image = Images(client_id=request.form['client_id'],
                   clodu_id=upload_result['public_id'],
                   url=upload_result['url'],
                   alt=request.form['alt'],
                   caption=request.form['caption'])
    db.session.add(image)
    db.session.commit()

    return image.serialize(), 200


@api.route('/destroy/<string:img_id>', methods=['DELETE'])
def destroy_image(img_id):
    image = Images.query.get(img_id)
    result = cloudinary.uploader.destroy(image['cloud_id'])
    db.session.delete(image)
    db.session.commit()
    return 'Ok', 200

