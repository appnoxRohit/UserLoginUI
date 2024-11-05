import React from 'react'
import whatsapp from './assets/Button.png';
import attherate from './assets/Button2.png'
import first from './assets/first.png'
import gallery from './assets/gallery.png'
import tv from './assets/tv.png'
import help from './assets/help.png'
import message from './assets/message.png'
import './LoginPage.css'

const LoginPage = () => {
  return (
    <div className='main-div font-mono flex w-[1600px] h-[1000px] '>
{/* SIDEBAR */}
        
<div className='sidebar-hidden flex   flex-col justify-between border-2 border-grey h-full w-[88px]'>
    <div className='flex justify-center items-center mt-2'>
      <img className='w-[32px] h-[32px]' src={first} alt="exit" />
    </div>
    <div className='flex justify-center items-center gap-10 flex-col'>
      <img className='w-[32px] h-[32px]' src={gallery} alt="" />
      <img className='w-[32px] h-[32px]' src={tv} alt="" />
      <img className='w-[32px] h-[32px]' src={help} alt="" />
    </div>
    <div className='flex justify-center mb-2'>
      <div className='rounded-[30px] flex justify-center items-center w-[40px] h-[40px] bg-black'>
        <img className='w-[32px] h-[32px]' src={message} alt="" />
      </div>
    </div>
  </div>

{/* MAIN */}
        <div className='Main bg-white  w-[1164px] h-full'>

            <div className=''>
                      <h1 className=' mt-[120px] font-serif text-center text-[56px] '>Conttactie</h1>
                    

                    <form className=' mt-10'>
                        <div className='firstinput'>
                        <input placeholder='Name' className='bg-zinc-100 rounded-md w-[324px] pl-2 h-[56px] ' type="text" /> 
                        <input placeholder='congone' className='bg-zinc-100 rounded-md w-[324px] pl-2 h-[56px] gap-2 ml-4 '  type="text" /><br/>
                   
                        </div>

                        <div className=' secondinput mt-6'>
                        <input placeholder='email' className='bg-zinc-100 rounded-md w-[324px] h-[56px] pl-2'  type="text" />
                        <input placeholder='telfono' className='bg-zinc-100 rounded-md w-[324px] h-[56px] pl-2 ml-4'  type="text" /><br/>

                    
                        </div>
            

                    
              <select  name="" id=""  className="select mt-6 w-[666px] rounded-md h-[56px] px-4 py-3 text-sm  bg-zinc-100 appearance-none  pr-10">
                     <option value="">Richiesta Valutazione</option>
                </select>  

                <textarea placeholder=' Come possiamo auitarla ? ' className='textarea w-[666px] h-[168px] pl-3 pt-3 bg-zinc-100 mt-6 '>

                </textarea>

                
                <input placeholder='CARICA IMAGINI' className='imgarea border-dotted border-black bg-zinc-100 w-[666px]  text-center rounded-md  mt-6  h-[88px] '
          />

               

                <input placeholder='INVIA MESSAGGIO' className='btn bg-[#111111] w-[666px] h-[56px] rounded-[30px] text-white text-center mt-14' type="" />
                    </form>
                
            </div>

        </div>


{/* RIGHTSIDE */}
        <div className='Rightbar  w-[348px] h-full'>
                
                <div className='w-[348px] h-[500px] border-2 border-grey  flex flex-col  items-center justify-center'>
                    <img src={whatsapp} alt="" /><br/>
                    <p className='text-[16px]'>Preferisci usare whatsapp</p>
                    
                        <strong>+39 331987234</strong>
                    

                    </div>

                    <div className='w-[348px] h-[498px] border-2 border-grey border-t-0  border-b-0 flex flex-col  items-center justify-center'>
                        <img className='' src={attherate} alt="" />
                        <br />
                        <p>Preferisci inviarci una Email</p>
                    <h1>
                        <strong>info@mediatrade.com</strong>
                    </h1>

                        

                    </div>

        </div>


        
    </div>
  )
}

export default LoginPage