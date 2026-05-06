import { useState } from "react"


export default function App(){
  const [isOpen , setIsOpen]=useState(false)
  const [score ,setScore]=useState(0)
  const [next ,setnext]=useState(0)
  const [cart , setCart]=useState(null)

  const prodectImgs=["image-product-1.jpg", "image-product-2.jpg", "image-product-3.jpg", "image-product-4.jpg"]
  const navItems=['Collections', "Men", "Women", "About", "Contact"]
  return (

     <div className=" min-h-screen md:p-8 ">
      <div className="flex justify-between p-6 items-center "> {/*for the nav*/}
        <div className="flex gap-4 items-center justify-center">
          <div>
            <div>
              <img src="/images/icon-menu.svg" alt="" className={`size-4 cursor-pointer md:hidden`}
               onClick={()=>setIsOpen(!isOpen)}
              />

            </div>
          {isOpen && (
            <div className=" ">
              <div className="fixed inset-0 bg-black/50 transition-opacity z-40 md:hidden" onClick={()=>setIsOpen(false)}></div>
              <div className="absolute bg-white z-50 w-3/4 min-h-screen  inset-0 p-6 space-y-6 text-lg font-bold ">
                <img src="/images/icon-close.svg" alt="" onClick={()=>setIsOpen(false)}
                className="cursor-pointer"
                />

                  <ol  className="space-y-2 ">
                    {navItems.map((item)=>(
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
              </div>
            </div>
          )}


          </div>
          <h1 className="font-semibold text-4xl cursor-pointer">sneakers</h1>
          <div className=" hidden md:flex justify-center items-center gap-8 text-slate-500 cursor-pointer ">
                {navItems.map((item)=>(
                  <div key={item} className="hover:text-black hover:underline">
                    {item}
                  </div>
                ))}
              </div>
        </div>

        <div className="flex gap-4 items-center mx-sm max-x-auto">
          <div className="relative " >
          <img src="/images/icon-cart.svg" alt="" className="size-4  cursor-pointer"
          onClick={()=>setCart()}

          />
          {cart && cart.quantity >0 &&(
            <div className="absolute top-[-10px]  right-[-4px] bg-orange-500 px-1 shadow-orange-400 rounded-full text-white text-center text-xs">
              {cart.quantity}
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
                    <p>${cart.price} *{cart.quantity}</p>
                  </div>

                </div>
              ):(
                <p>your cart is empty</p>
              )}

            </div>
          )}

          <img src="/images/image-avatar.png" alt="" className="size-4 cursor-pointer"/>
        </div>
      </div>
      <div className="md:border  border-gray-200 "></div>
      <div className="md:flex md:p-20 gap-8 items-center justify-center">{/*for the med deseign*/}

      <div className="relative md:w-1/4   space-y-6 md:flex flex-col justify-center">{/*img scrol*/}
      <div>
        <img src={`/images/${prodectImgs[next]}`} alt="" className="w-full md:rounded-lg md:w-[400px] " /> {/*"/images/image-product-1.jpg"*/}
        <div className="absolute z-10 flex justify-between top-[8rem] w-full p-2  md:hidden">{/*next back element*/}
          <img src="/images/icon-previous.svg" alt=""  className="bg-white rounded-full  p-3 cursor-pointer"
          onClick={()=>setnext((next-1 +prodectImgs.length) %prodectImgs.length)}
          />
          <img src="/images/icon-next.svg" alt=""  className="bg-white rounded-full  p-3 cursor-pointer"
          onClick={()=>setnext((next+1)%prodectImgs.length)}

          />
        </div>
      </div>
      <div className="flex justify-evenly ">
      {prodectImgs.map((img)=>(
          <div key={img} className="hidden md:flex flex-col size-20 cursor-pointer hover:p-2 focus:bg-sky-500 outline-orange-500">
            <img src={`/images/${img}`} alt=""  className="rounded"/>
          </div>
        ))}
      </div>
      </div>
      <div className="p-8 space-y-6 md:w-2/5">{/*content*/}
        <p className="text-sm text-gray-400">SNEAKER COMPANY</p>
        <h1 className="text-xl font-extrabold tracking-widest">Fall Limited Edition Sneakers</h1>
        <p className="text-sm text-gray-500">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
        <div className="flex justify-between">{/*price content*/}
          <p className="text-2xl font-bold gap-4">$125.00 <span className="bg-black text-sm text-white  p-1 rounded-lg">50%</span></p>
          <p className="text-gray-500 line-through">$250</p>


        </div>
        <div className="md:flex gap-4 space-y-6">

        <div className="p-4 flex bg-gray-100 rounded-lg shadow justify-between items-center md:w-1/2">{/*score container*/}
          <img src="/images/icon-minus.svg" alt=""
           onClick={()=>setScore(score-1)}
           className="w-3 cursor-pointer"

          />
          {score}
          <img src="/images/icon-plus.svg" alt=""
           onClick={()=>setScore(score+1)}
           className="size-3 cursor-pointer"
           />

        </div>
        <button className="flex justify-center items-center rounded-lg p-4 bg-orange-500 w-full gap-4 shadow-orange-500 shadow-2xl "
        onClick={()=>{
          if(score===0)return
          setCart(
            {
              title:"Fall Limited Edition Sneakers",
              price:125,
              quantity:score,
              image:prodectImgs[0]
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
      </div>
     </div>
  )
}