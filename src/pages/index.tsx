//A union type describes a value that can be one of several types. 

const value:  string | number = "union type value, one of several types";

//we generate function to map through, okay generated below okay, hmm
//we slice and generate certain amount and now getsstaticprops, we have staticprops
//then opathgs and each iteration now param and isd array strucutre paths 

import { GetStaticProps } from 'next';
import Link from 'next/link';

function PresidentList( { presidents } : any){
    return( 
        <>
            <p>List of US presidents</p>
            {
                presidents.map( 
                   (president : any ) =><div key={ president.id }>
                        
                        <Link href= { `presidents/${president.id}`}>
                            <li><a>{ president.name }</a></li>
                        </Link></div>
                 
                 )
            }
        </>
    )
}

export default PresidentList
 
 
export const getStaticProps: GetStaticProps = async (context) => {

        const response = await fetch('https://api.sampleapis.com/presidents/presidents',{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        });
        const data = await response.json();
        
        return {
            props:{
                presidents: data.slice(0,3),//take only 3 names from the list
            },
        }
}