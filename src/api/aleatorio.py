from flask_sqlalchemy import SQLAlchemy

# configuracion Seeding 
from flask_seeder import Seeder, Faker, generator
from faker import Faker
import random
import json

data={}
data['clientes']=[]

locale_list=['es_ES']
cliente=['Owner','Carer']
descripcionCliente=['Amante de los animales','Le gusta la naturaleza','loco por el spinning']

avatares=[ 'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-1.png',
           'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png',
           'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-3.png',
           'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-8.png',
           'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-6.png']

passWord=['a','z']

faker=Faker(locale_list); 

for i in range(8):
    name=faker.first_name()
    surname= faker.last_name()
    address= faker.address()
    city= faker.administrative_unit()
    email= faker.ascii_company_email()
    avatar= random.choice(avatares)
    password= random.choice(passWord)
    roles= random.choice(cliente)
    cliente_id=i
    description= random.choice(descripcionCliente)
    latitude=random.randint(0,10)
    longitude=random.randint(30,40)

    data['clientes'].append(
        {'name':name,
        'surname':surname,
        'address':address,
        'city':city,
        'email':email,
        'avatar':avatar,
        'password':password,
        'roles':roles,
        'cliente_id':cliente_id,
        'description':description,
        'latitude':latitude,
        'longitude':longitude})

print(data)