// import { Link } from "react-router";


// export default function TopApps({ data = [] }) {

//   const topApps = [...data]
//     .sort((a, b) => b.ratingAvg - a.ratingAvg)
//     .slice(0, 8);

//   return (
//     <div className='mt-10'>
//       <div className='text-center space-y-4'>
//         <h1 className='text-5xl font-bold'>Trending Apps</h1>
//         <p className='text-gray-400'>
//           Discover All trending apps on the market developed by us
//         </p>
//       </div>

//       <div className='mt-5 w-11/12 mx-auto'>
//         <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
//           {topApps.map((singleApp) => (
//             <div key={singleApp.id} className="bg-white rounded-xl shadow-md p-3">
//               <img className='h-72 w-full object-cover' src={singleApp.image} alt="" />

//               <h3 className="text-lg font-bold mt-3 text-gray-800">
//                 {singleApp.title}
//               </h3>

//               <div className="flex justify-between mt-3 text-xs">
//                 <span className="text-green-600 bg-green-100 px-2 py-0.5 rounded">
//                   ⬇ {singleApp.downloads}
//                 </span>

//                 <span className="text-orange-500 bg-orange-100 px-2 py-0.5 rounded">
//                   ★ {singleApp.ratingAvg}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className='mt-4 flex justify-center'>
//           <Link to="/apps" className='px-5 py-2 bg-violet-600 text-white rounded-xl'>
//             Show All
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }