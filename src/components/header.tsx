import Logo from '../assets/ART BORDER WHITE.png'

export default function Header () {
  return (
    <div className='flex flex-col justify-center items-center gap-4 text-center pt-6 pb-8 md:pt-10 md:pb-12 lg-py-32'>
      <img className='h-28 ' src={Logo} alt="" />
      <h1 className='font-bold text-2xl' >COORDENADORIA DE URGÊNCIA</h1>
      <h1 className='font-bold text-2xl' >CENSO DE SITUAÇÃO</h1>
    </div>
  );
};