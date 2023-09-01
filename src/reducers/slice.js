import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value:"",
  products:[
    {
      id: 1,
      name: "Chapati",
      price: "1",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWfrtlCuZtvdCLHa796Jo8o-XdQbrjctIisQ&usqp=CAU"
    },
    {
      id: 2,
      name: "Pickle",
      price: "1",
      image: "https://i0.wp.com/florafoods.in/wp-content/uploads/2022/05/Mekkekayi-Pickle-2-.png?fit=800%2C800&ssl=1"
    },
    {
      id: 3,
      name: "Curd",
      price: "1",
      image: "https://images.healthshots.com/healthshots/en/uploads/2022/07/01125414/curd-monsoon-1600x900.jpg"
    },
    {
      id: 4,
      name: "Sweet",
      price: "1",
      image: "https://foodiewish.com/wp-content/uploads/2020/05/Bengali-Sweets-Bengali-Rasgulla.jpg"
    },
    {
      id: 5,
      name: "Daal",
      price: "1",
      image: "https://static.toiimg.com/thumb/53265825.cms?width=1200&height=900"
    },
    {
      id: 6,
      name: "Paneer Dish",
      price: "1",
      image: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-5-500x500.jpg"
    }
  ],
  thali: [

  ]
}

export const thaliSlice = createSlice({
  name: "Thali",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.thali.push(action.payload)
    },
    removeItem: (state, action) => {
      state.thali.splice(action.payload, 1)
    },
  },
})

export const {addItem, removeItem} = thaliSlice.actions;

export default thaliSlice.reducer;