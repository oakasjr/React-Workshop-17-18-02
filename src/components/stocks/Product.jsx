import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Product = () => {
    //State
    const [name, setName] = useState("")
    const [qty, setQty] = useState(0)
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState("")

    const [data, setData] = useState([])


    const addProduct = async () => {
        try {
            //ใช้ได้
            const url = "https://workshop-react-api.vercel.app/product"
            const user_id = localStorage.getItem('user_id')

            //API
            const res = await axios.post(url, { name, qty, price, image, user_id })

            fetchData()
        } catch {
            //ใช้ไม่ได้
            console.log(error);
        }
    }

    const deleteProduct = async (id) => {
        try {
            const confirmation = window.confirm("คุณแน่ใจหรือไม่ที่ต้องการลบสินค้านี้?");
            if (confirmation) {
                const url = `https://workshop-react-api.vercel.app/product/${id}`;
                await axios.delete(url);
                fetchData();
            }
        } catch (error) {
            console.log(error);
        }
    }

   
    const fetchData = async () => {
        try {
            const user_id = localStorage.getItem('user_id')
            const url = `https://workshop-react-api.vercel.app/product?user_id=${user_id}`
            //API
            const res = await axios.get(url)
            console.log(res.data)
            setData(res.data)

        } catch {
            console.log(error)
        }
    }

    useEffect(() => { fetchData() }, [])



    return (
        <div>
            name : {name}<br />
            qty : {qty}<br />
            price : {price}<br />
            image : {image}<br />
            <div>
                <div className='bg-green-800 rounded-lg shadow-lg m-10 p-5 '>
                    <input
                        placeholder='ชื่อสินค้า'
                        className='border border-black py-2 m-4 rounded-lg '
                        type="text"
                        name='name '
                        onChange={(e) => setName(e.target.value)} />
                    <input
                        placeholder='จำนวน'
                        className='border border-black py-2 m-4 rounded-lg'
                        type="number"
                        name='qty'
                        onChange={(e) => setQty(e.target.value)} />
                    <input
                        placeholder='ราคา'
                        className='border border-black py-2 m-4 rounded-lg'
                        type="number"
                        name='price'
                        onChange={(e) => setPrice(e.target.value)} />
                    <input
                        placeholder='รูปภาพ'
                        className='border border-black py-2 m-4 rounded-lg'
                        type="text"
                        name='image'
                        onChange={(e) => setImage(e.target.value)} />

                    <button
                        placeholder='ชื่อสินค้า'
                        className='bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg m-4 shadow-lg'
                        onClick={addProduct}>
                        Save
                    </button>


                </div>

            </div>

            <div className='bg-green-800 rounded-lg shadow-lg m-10 p-5'>


                <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 bg-green-600">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    รูปภาพ
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    ชื่อสินค้า
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    จำนวน
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    ราคา
                                </th>
                                <th scope="col" class="px-6 py-3 justify-center" >
                                    แก้ไข/ลบ
                                </th>

                            </tr>
                        </thead>
                        <tbody>

                            {data.map((item, index) => (
                                // TR



                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">
                                        <img className='w-20' src={item.image} alt="" />
                                    </th>
                                    <td class="px-6 py-4">
                                        {item.name}
                                    </td>
                                    <td class="px-6 py-4">
                                        {item.qty}
                                    </td>
                                    <td class="px-6 py-4">
                                        {item.price}
                                    </td>
                                    <td class="justify-center">
                                        <button onClick={() => editProduct(item.id)} className='bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-3 m-2 rounded-lg'>แก้ไข</button>
                                        <button onClick={() => deleteProduct(item.id)} className='bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-3 rounded-lg'>ลบ</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>

    )
}



{/* <button className='bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-3 m-2 rounded-lg'>แก้ไข</button>
<button className='bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-3 rounded-lg'>ลบ</button> */}

export default Product



// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const Product = () => {
//     // State
//     const [name, setName] = useState("")
//     const [qty, setQty] = useState(0)
//     const [price, setPrice] = useState(0)
//     const [image, setImage] = useState("")
//     const [editMode, setEditMode] = useState(false)
//     const [editProductId, setEditProductId] = useState(null)

//     const [data, setData] = useState([])

//     const addProduct = async () => {
//         try {
//             const url = "https://workshop-react-api.vercel.app/product"
//             const user_id = localStorage.getItem('user_id')

//             const res = await axios.post(url, { name, qty, price, image, user_id })
//             fetchData()
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     const editProduct = async (productId) => {
//         try {
//             const productToEdit = data.find(product => product.id === productId)
//             setName(productToEdit.name)
//             setQty(productToEdit.qty)
//             setPrice(productToEdit.price)
//             setImage(productToEdit.image)
//             setEditMode(true)
//             setEditProductId(productId)
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     const updateProduct = async () => {
//         try {
//             const url = `https://workshop-react-api.vercel.app/product/${editProductId}`
//             const user_id = localStorage.getItem('user_id')

//             const res = await axios.put(url, { name, qty, price, image, user_id })
//             fetchData()
//             setEditMode(false)
//             setEditProductId(null)
//             setName("")
//             setQty(0)
//             setPrice(0)
//             setImage("")
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     const deleteProduct = async (productId) => {
//         try {
//             const confirmation = window.confirm("คุณแน่ใจหรือไม่ที่ต้องการลบสินค้านี้?");
//             if (confirmation) {
//                 const url = `https://workshop-react-api.vercel.app/product/${productId}`;
//                 await axios.delete(url);
//                 fetchData();
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const fetchData = async () => {
//         try {
//             const user_id = localStorage.getItem('user_id')
//             const url = `https://workshop-react-api.vercel.app/product?user_id=${user_id}`
//             const res = await axios.get(url)
//             setData(res.data) 
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     useEffect(() => { fetchData() }, [])

//     return (
//         <div>
//             {/* Add product form */}
//             <div className='bg-green-800 rounded-lg shadow-lg m-10 p-5 '>
//                 <input
//                     placeholder='ชื่อสินค้า'
//                     className='border border-black py-2 m-4 rounded-lg '
//                     type="text"
//                     name='name '
//                     value={name}
//                     onChange={(e) => setName(e.target.value)} />
//                 <input
//                     placeholder='จำนวน'
//                     className='border border-black py-2 m-4 rounded-lg'
//                     type="number"
//                     name='qty'
//                     value={qty}
//                     onChange={(e) => setQty(e.target.value)} />
//                 <input
//                     placeholder='ราคา'
//                     className='border border-black py-2 m-4 rounded-lg'
//                     type="number"
//                     name='price'
//                     value={price}
//                     onChange={(e) => setPrice(e.target.value)} />
//                 <input
//                     placeholder='รูปภาพ'
//                     className='border border-black py-2 m-4 rounded-lg'
//                     type="text"
//                     name='image'
//                     value={image}
//                     onChange={(e) => setImage(e.target.value)} />
//                 {editMode ? (
//                     <button
//                         className='bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg m-4 shadow-lg'
//                         onClick={updateProduct}>
//                         Update
//                     </button>
//                 ) : (
//                     <button
//                         className='bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg m-4 shadow-lg'
//                         onClick={addProduct}>
//                         Save
//                     </button>
//                 )}
//             </div>

//             {/* Product list */}
//             <div className='bg-green-800 rounded-lg shadow-lg m-10 p-5'>
//                 <div class="relative overflow-x-auto">
//                     <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//                         <thead class="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 bg-green-600">
//                             <tr>
//                                 <th scope="col" class="px-6 py-3">
//                                     รูปภาพ
//                                 </th>
//                                 <th scope="col" class="px-6 py-3">
//                                     ชื่อสินค้า
//                                 </th>
//                                 <th scope="col" class="px-6 py-3">
//                                     จำนวน
//                                 </th>
//                                 <th scope="col" class="px-6 py-3">
//                                     ราคา
//                                 </th>
//                                 <th scope="col" class="px-6 py-3 justify-center" >
//                                     แก้ไข/ลบ
//                                 </th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {data.map((item, index) => (
//                                 <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
//                                     <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">
//                                         <img className='w-20' src={item.image} alt="" />
//                                     </th>
//                                     <td class="px-6 py-4">
//                                         {item.name}
//                                     </td>
//                                     <td class="px-6 py-4">
//                                         {item.qty}
//                                     </td>
//                                     <td class="px-6 py-4">
//                                         {item.price}
//                                     </td>
//                                     <td class="justify-center">
//                                         <button
//                                             className='bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-3 m-2 rounded-lg'
//                                             onClick={() => editProduct(item.id)}>
//                                             แก้ไข
//                                         </button>
//                                         <button
//                                             onClick={() => deleteProduct(item.id)}
//                                             className='bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-3 rounded-lg'>
//                                             ลบ
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Product
