const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
 const deliveryPerson = order.order.delivery.deliveryPerson;
 const person = order.name;
 const phone = order.phoneNumber;
 const street = order.address.street;
 const streetNumber = order.address.number;
 const apart = order.address.apartment;

 console.log(`Olá ${deliveryPerson}, entrega para ${person}, Telefone:${phone}, Nº${streetNumber}, AP ${apart}`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.

}

orderModifier(order);