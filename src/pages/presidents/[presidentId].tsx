import { GetStaticProps } from "next";

function President( { president } : any){  

    return( 
        <>
            <h1>President : { president.name }</h1>
            {
                 
             <div>
                <label>Years in office: </label>{ president.yearsInOffice }<br />
                <label>Vice president: </label>{ president.vicePresidents }<br />
                <img src={ president.photo } />
             </div>
                 
            }
        </>
    )
}

export default President

export async function getStaticPaths(){
    return {
        paths:[
            { params:{ presidentId: '1' }  },
            { params:{ presidentId: '2' }  },
            { params:{ presidentId: '3' }  }
        ],
        fallback:false
    }
}

 
 export const getStaticProps: GetStaticProps = async (context : any) => {
    const { params } = context;
    console.log( context)
    const response = await fetch(`https://api.sampleapis.com/presidents/presidents/${ params.presidentId }`,{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    });
    const data = await response.json();
   
    return {
        props:{
            president: data,
        },
    }
}