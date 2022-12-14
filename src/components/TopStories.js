import {  items } from "./Data";






function TopStories() {
    return ( 
        <div className="storyHead" >
        <h1>Top Stories</h1>
        <div className=" Container grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            
            {items.map((item) => (
                <div>
               <div class=" card py-8 md:px-17 sm:px-14 px-18">
               <div class="lg:story item-center shadow-md">
                   <a href="#h">
                       <img class="object-cover w-full h-52 dark:bg-gray-500" src={item.img} alt=""/>
                   </a>
                   <div class="p-1">
                       <a href="#gg">
                           <h5 class="text-gray-900 Title  hover:text-indigo-600 transition duration-500 ease-in-out  font-bold text-1xl tracking-tight mb-1">{item.Genre}</h5>
                       </a>
                       <p class="font-normal text-gray-700 mb-1 ">{item.Topic}</p>
                       <p class="font-normal text-gray-700 mb-1">by {item.by}</p>
                       
                   </div>
               </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
     );
}

export default TopStories;