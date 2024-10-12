import { Sidebar } from "./componentes/Sidebar"
import { TwitterForm } from "./componentes/Twitterform"


function App() {
 

  return (
    
      <div className= "flex mx-auto max-w-7xl">
        
        <Sidebar /> 
        <main className="flex-grow border-l border-r border-gray-700 max-w-xl">
          <header className="sticky top-0z-10 bg-twitter-background bg opacity-80 backdrop-blur-sm">
           <h2 className="px-4  py-3 text-xl font-bold"> For You</h2>
          </header>
       <TwitterForm />
        </main>

       </div> 
        
    
  )
}

export default App
