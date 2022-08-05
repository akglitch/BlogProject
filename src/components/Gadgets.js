import { gadgets } from "./gadgetData";






function Gadgets() {
    return ( 
        <div className="storyHead" >
        <h1>Top Stories</h1>
        <div className=" Container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
            
            {gadgets.map((items) => (
                <div>
               <div class=" card py-8 md:px-17 sm:px-14 px-18">
               <div class="sm: items-center shadow-md">
                   <a href="#">
                       <img class="squared-t-lg" src={items.img} alt=""/>
                   </a>
                   <div class="p-5">
                       <a href="#">
                           <h5 class="text-gray-900 font-bold text-1xl tracking-tight mb-1">{items.Genre}</h5>
                       </a>
                       <p class="font-normal text-gray-700 mb-1">{items.Topic}</p>
                       <p class="font-normal text-gray-700 mb-1">by {items.by}</p>
                       
                   </div>
               </div>
</div>
                </div>
            ))}
        </div>
        </div>
     );
}

export default Gadgets;