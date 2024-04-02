import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
//import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    //toast.success("Item Removed");
  }

  return (
    <div className="w-96">

      <div className="flex ">

        <div className="h-[180px] ml-2 mt-3">
          <img src={item.image} className="h-full w-full " / >
        </div>
        <div className="ml-6 ">
          <h1 className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-5'>{item.title}</h1>
          <h1 className="w-40 text-gray-400 font-normal text-[10px] text-left mt-5">{item.description.split(" ").slice(0,20).join(" ")+"..."}</h1>
          <div className="flex mt-5 justify-between">
            <p  className="text-green-600 font-semibold">${item.price}</p>
            <div
            onClick={removeFromCart}>
              <RiDeleteBin5Fill />
            </div>
          </div>
          

        </div>


      </div>
       <div className="border-b border-gray-900 mt-5"></div>
    </div>
  );
};

export default CartItem;




// import { FcDeleteDatabase } from "react-icons/fc";
// import { useDispatch } from "react-redux";
// import { remove } from "../redux/Slices/CartSlice";

// const CartItem = ({ item, itemIndex }) => {
//   const dispatch = useDispatch();

//   const removeFromCart = () => {
//     dispatch(remove(item.id));
//   };

//   return (
//     <div className="border-b border-gray-500">
//       <div className="flex">
//         <img src={item.image} alt={item.title} className="w-24 h-24 object-cover" />
//       </div>
//       <div className=" flex ml-4">
//         <h1 className="text-xl font-bold">{item.title}</h1>
//         <p className="text-gray-600">{item.description}</p>
//         <div className="flex items-center mt-2">
//           <p className="text-lg font-bold mr-4">${item.price}</p>
//           <div className="cursor-pointer" onClick={removeFromCart}>
//             <FcDeleteDatabase />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItem;
