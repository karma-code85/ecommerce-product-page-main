import { useState } from "react"


export default function App(){
  const [isOpen , setIsOpen]=useState(false)
  const [score ,setScore]=useState(0)
  const [next ,setnext]=useState(0)
  const [cart , setCart]=useState(null)

  const prodectImgs=["image-product-1.jpg", "image-product-2.jpg", "image-product-3.jpg", "image-product-4.jpg"]
  return (

     <div className=" min-h-screen">
      <div className="flex justify-between p-4 items-center"> {/*for the nav*/}
        <div className="flex gap-4 items-center justify-center">
          <div>
            <div>
              <img src="/images/icon-menu.svg" alt="" className="size-4" onClick={()=>setIsOpen(!isOpen)}/>
            </div>
          {isOpen && (
            <div className=" ">
              <div className="fixed inset-0 bg-black/50 transition-opacity z-40" onClick={()=>setIsOpen(false)}></div>
              <div className="absolute bg-white z-50 w-3/4 min-h-screen  inset-0 p-6 space-y-6 text-lg font-bold">
                <img src="/images/icon-close.svg" alt="" onClick={()=>setIsOpen(false)}/>

                  <ol  className="space-y-2 ">
                  <li>Collections</li>
                  <li>Men</li>
                  <li>Women</li>
                  <li>About</li>
                  <li>Contact</li>
                  </ol>
              </div>
            </div>
          )}


          </div>
          <h1 className="font-semibold text-4xl">sneakers</h1>
        </div>
        <div className="flex gap-4 items-center">
          <div className="relative " >
          <img src="/images/icon-cart.svg" alt="" className="size-4 "
          onClick={()=>setCart()}

          />
          {cart && cart.quntity >0 &&(
            <div className="absolute top-[-10px]  right-[-4px] bg-orange-500 px-1 shadow-orange-400 rounded-full text-white text-center text-xs">
              {cart.quntity}
            </div>
          )}
          </div>
          {cart &&(
            <div className="p-4 bg-white absolute top-20 rounded-lg ">
              {cart?(
                <div>
                  <h1>Cart</h1><hr />
                  <div>
                    <img src={`/images/${cart.image}`} alt="" />
                    <p>{cart.title}</p>
                    <p>${cart.price} *{cart.quntity}</p>
                  </div>

                </div>
              ):(
                <p>your cart is empty</p>
              )}

            </div>
          )}

          <img src="/images/image-avatar.png" alt="" className="size-4"/>
        </div>

      </div>
      <div className="relative">{/*img scrol*/}

        <img src={`/images/${prodectImgs[next]}`} alt="" className="w-full" /> {/*"/images/image-product-1.jpg"*/}


        <div className="absolute z-10 flex justify-between top-[8rem] w-full p-2 ">{/*next back element*/}
          <img src="/images/icon-previous.svg" alt=""  className="bg-white rounded-full  p-3 "
          onClick={()=>setnext((next-1 +prodectImgs.length) %prodectImgs.length)}
          />
          <img src="/images/icon-next.svg" alt=""  className="bg-white rounded-full  p-3"
          onClick={()=>setnext((next+1)%prodectImgs.length)}

          />
        </div>
      </div>
      <div className="p-8 space-y-6">{/*content*/}
        <p className="text-sm text-gray-400">SNEAKER COMPANY</p>
        <h1 className="text-xl font-extrabold tracking-widest">Fall Limited Edition Sneakers</h1>
        <p className="text-sm text-gray-500">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
        <div className="flex justify-between">{/*price content*/}
          <p className="text-2xl font-bold gap-4">$125.00 <span className="bg-black text-sm text-white  p-1 rounded-lg">50%</span></p>
          <p className="text-gray-500 line-through">$250</p>


        </div>
        <div className="p-4 flex bg-gray-100 rounded-lg shadow justify-between items-center">{/*score container*/}
          <img src="/images/icon-minus.svg" alt=""
           onClick={()=>setScore(score-1)}
           className="w-3"

          />
          {score}
          <img src="/images/icon-plus.svg" alt=""
           onClick={()=>setScore(score+1)}
           className="size-3"
           />

        </div>
        <button className="flex justify-center items-center rounded-lg p-4 bg-orange-500 w-full gap-4 shadow-orange-500 shadow-2xl "
        onClick={()=>{
          if(score===0)return
          setCart(
            {
              title:"Fall Limited Edition Sneakers",
              price:125,
              quntity:score,
              img:prodectImgs[0]
            }
          )
        }}
        >
          <img src="/images/icon-cart.svg" alt=""
          className="brightness-0 "
           />
          <p className="font-bold ">Add to cart</p>
        </button>
      </div>
     </div>
  )
}