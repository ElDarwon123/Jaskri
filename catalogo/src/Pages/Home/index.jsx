import Layout from '../../Components/Layout'
import Card from "../../Components/Card"

function Home() {
    return (
        
            <Layout>
                Home 
                <div className='flex flex-wrap items-center justify-center
                {for (let index = 0; index < 6; index++) {
                    index += 1;
                    
                }}'>
                    
                    <Card />
                    
                    <Card />
                    <Card />
                    <Card />
                </div>
                
            </Layout>
            
        
    
    )
}


export default Home