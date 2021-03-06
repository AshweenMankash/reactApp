import React, { Component } from 'react';
import Profiles from './Components/siteHeader';


class App extends Component {

  state={
    counter:0
  };

  styles = {
    color:'rgba(100,100,100,1.0',
  };

  increment = ()=>(
    this.setState(
      {
        counter:this.state.counter<this.profiles.length-1?this.state.counter+1:0
      
      
      }
      
    ),
    console.log(this.state.counter + ''+this.profiles.length)
  );

  decrement = ()=>(
    
      this.setState(
        {
          counter:this.state.counter>0?this.state.counter-1:this.profiles.length-1
        }
      )
  );


  profiles = [
    {
      name:"Jaanki Devi",
      url:"https://lh3.googleusercontent.com/uD6BUkRCJ0lP7VXtkFth_eECde3HLDnLH4kkhOYCnpH6crmrOna5pdnk8IAeP4R9gJMWI4XXAy1-fG0YSp5lv12QejcY-s_tPo-SwAx8tqmDknDKgX-2Becv-8lLkATq3MKRF_GjcTLWtmJIQc5KKAvyGMBUbKNK6gTl9iXUGNhf6HUmABkUAibHNrLqFs3qCX1e0lzeaKfniYNgWX0GBYMgP5bmN824OlpyPU1H9RPPqdYfQO58ejyPx5einFs1FHOf-6eomdejhHTbb3KHsJw3t7yixJYj4YSK2RDrUKNQJzeGQHa6Du2lR8vUvCeM-dzQ9KZVEcQ_vysZ9vntQMa9ti1fcL5MrS9jLY__dcJfMUQjQsYJX3X5ed6UYTaHCQL-egb7YuP3o_LZotvyHbt4yJRFxbhOapeuLfNjbzwEfJuQ5M7G2vSSjCsOHcYVbqErxS2ri2rLOrBy7zR8OFgNOwql1v8T0ZiK9kTrkbd_wF1Vizqoe2HM4dmjuaN99zGiAMBobRfI7e-mzOSG6vP8Ngux-RVpZb14ObLpIolqZFB51Xy0IHFfAduaTkX8PmazDP_51e4ZKPwNlLwS_7Ekdu2G-zI2bowM29isu1k7jXkmEWCaCDt9w75FKf2p2OSciL8ujIBoPkXpwZVs7cDGq5Y3NLM=w480-h640-no"
    },
    {
      name:"Ramesh Mankash",
      url:"https://lh3.googleusercontent.com/9BeWxIelCy6XG0Krr4kmC92hXtCSvDmXP2aNbw60nJjQK2fbfkWjlODaYda7HFk7Z2Nuz33cdbmJQJtogckPrEQ_TmXCUjUgSswpcd0H37whNfDlVHcTyvPjiO3-AaDnyjOGSL-TaFqrTaHNO-HGa5WT6ZA51jJr0C7iZyA6Kv5m7IdrOh0CU6-F__kyz89o-MS5rXu5jnrs7V43eIGfKfxSLPHADsy19w2GlZFheZ4Ot8HlVVHfgMPD4GT2mKnp0hj2dUPQyY6fDay4wxFlsL5orHF0hAQBERf1fVKuSikOIlR9NJZ77ZPrFU1lVMSf_n6gKUtfn-6k8jfMWjvKYUFiE6V9_429mS2Mr3OqLjouO3dKaZ5WthQvOtgcqM-zZo2WGcf698o3bDf0DIm6OWu4t1xutbABkpOZHS-XFcNwXTFxpxs4FMtgyDoPzDHrpjlC2ATaFC7LInvo-2xYgz8JA5RZssZytuq1Ud2RZPnp9xLKgW4Gl6WiarG8hNFjNLg8H67G5sj8RPplLF6NNL1QLXbj5LD0VLmFpqk3cY-Rs6-wWZ8LQGClsiLlhdX8_GSavTQv9EjOnWsdbDFdHPBZFoK_lU_GCtOy0DVRgRaOdIVeKytIt3vhXbiidT92NH17yQ9KfqNedanjGaDy8U8Lo9kKv4s=w480-h640-no"
    },
  {
    name:"Shaan Mankash",
    url:"https://lh3.googleusercontent.com/SVhVVqRSFIFifriKzD2u7khqAwoTsbym2usyvcCna6wHuRiymSdaSyrSNyW0GXipYlwDvt-nFG9tz4j7STeMz96sDPfdnSuxHMm7_lLDekAFoHQ3TjdCEQhC_SvPBRpujMXNA7GsEt1YCX3FRSTXY5M3yhN5J9HI0cuKeeKpFKgc2EosUhFcPfQIby_gwT3NdKsdDJ640GqbC4aASRN7kPbfFAZIixLXY6mQ_L0u46fFNxODyj6EORkFmWS-Dfaop99A5iP6GDbeSuwOpjJ-Ueejm1yYzv1NoxJqlBGcLxktuxn2MerlP6FVeUPZFpNr0ncNmdZiJGHgMU97CeIShMR-7RIqzmfVQqXMvhh5inoy7NY_yyk200TMnWrS4JA99qtb-BLPipmUONWVOsLmb4pvS1ygnRGnHrNUsAw6eaBnytfVkEQJ665jBjhvGIySG36mo3Yoj6urkTTjb8isDImatB5IfY89rvSa7Mr1VxoWALL_e-ZtMT2NM9F-EHVotoAwL41kbQ50rZeigDMCPBiK7l_SAuVYN1bOXAy5Ld-8qXDOOoR2oFlTcoODNQd043AGS0m2DmCHbXL9O-WI9IY5mJUkLlEQDpONi8Byso6rOKU3OvOmPjTf1hDvY3AlPy0z66xtoA4IiFHXqgWAwXJ9jzh26Xo=w480-h640-no"
  },
  {
    name:"Meena Mankash",
    url:"https://lh3.googleusercontent.com/wo8BVtZU_RHPh4ZpXPN19gncCYxttJb699ofTRjWVTzXkWzbmJzqcoNwzeOS-dyr7SQlENCEI0RcnNamm-UQex1diM6eGwvphlTA0WfQEcFmwgxc3-tNqmmuw28B1S3JuyukrHcPlKu1KbRfrPzx4xifOd33sQv76D0x2x6AP5V2Vwi12KrjCEp7XCz1NiIU2pCvLOs8LkayFXnhgk63SSK8ANaftLmqa8WNV5fljHr5rLPOFNmvCfdoa0YnytSa10TIZHet5qsnGtdNwxBg9eV38MBK77kyE3P-sc_51rMTxvw6LyaB4Pqxmml4GvN5gLQw0Z0CbSbEvR3xDg6pVGpizM2aLeuv344Z03JiwiAkioMb9YUMx52TRCA7T6-BUYsqW_5B1ZrTf9-XBgc4JHAIDiPYmyU0_8_O_UV5JJFz6Ig3vkIexgm01gXR6aSgjfnjPmgqxS6EP6K0vIZqbhdSN1etQMmgKJhXH-QXma5QLTHy3Mg2W6mBj3lx-zozcJGCue2evIo_s_snyscn6obD52cHD63Gb0qQtlpF5OIJxaKO9YgpaYRprtjbUXrdeFctandu56zw3oIJb3O4sEL8hc6xiPb21gwg61mIrldADAxHpHrs7orCGbckrYDPn-fXXd6fGn3WilF8J1DySthgsiTzeMk=w1138-h640-no"
  },
  {
    name:"Ashween Mankash",
    url:"data:image/jpeg;base64,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"
  },
  {
    name:"Ramesh Mankash",
    url:"https://lh3.googleusercontent.com/9BeWxIelCy6XG0Krr4kmC92hXtCSvDmXP2aNbw60nJjQK2fbfkWjlODaYda7HFk7Z2Nuz33cdbmJQJtogckPrEQ_TmXCUjUgSswpcd0H37whNfDlVHcTyvPjiO3-AaDnyjOGSL-TaFqrTaHNO-HGa5WT6ZA51jJr0C7iZyA6Kv5m7IdrOh0CU6-F__kyz89o-MS5rXu5jnrs7V43eIGfKfxSLPHADsy19w2GlZFheZ4Ot8HlVVHfgMPD4GT2mKnp0hj2dUPQyY6fDay4wxFlsL5orHF0hAQBERf1fVKuSikOIlR9NJZ77ZPrFU1lVMSf_n6gKUtfn-6k8jfMWjvKYUFiE6V9_429mS2Mr3OqLjouO3dKaZ5WthQvOtgcqM-zZo2WGcf698o3bDf0DIm6OWu4t1xutbABkpOZHS-XFcNwXTFxpxs4FMtgyDoPzDHrpjlC2ATaFC7LInvo-2xYgz8JA5RZssZytuq1Ud2RZPnp9xLKgW4Gl6WiarG8hNFjNLg8H67G5sj8RPplLF6NNL1QLXbj5LD0VLmFpqk3cY-Rs6-wWZ8LQGClsiLlhdX8_GSavTQv9EjOnWsdbDFdHPBZFoK_lU_GCtOy0DVRgRaOdIVeKytIt3vhXbiidT92NH17yQ9KfqNedanjGaDy8U8Lo9kKv4s=w480-h640-no"
  },
  {
    name:"Ramesh Mankash",
    url:"https://lh3.googleusercontent.com/9BeWxIelCy6XG0Krr4kmC92hXtCSvDmXP2aNbw60nJjQK2fbfkWjlODaYda7HFk7Z2Nuz33cdbmJQJtogckPrEQ_TmXCUjUgSswpcd0H37whNfDlVHcTyvPjiO3-AaDnyjOGSL-TaFqrTaHNO-HGa5WT6ZA51jJr0C7iZyA6Kv5m7IdrOh0CU6-F__kyz89o-MS5rXu5jnrs7V43eIGfKfxSLPHADsy19w2GlZFheZ4Ot8HlVVHfgMPD4GT2mKnp0hj2dUPQyY6fDay4wxFlsL5orHF0hAQBERf1fVKuSikOIlR9NJZ77ZPrFU1lVMSf_n6gKUtfn-6k8jfMWjvKYUFiE6V9_429mS2Mr3OqLjouO3dKaZ5WthQvOtgcqM-zZo2WGcf698o3bDf0DIm6OWu4t1xutbABkpOZHS-XFcNwXTFxpxs4FMtgyDoPzDHrpjlC2ATaFC7LInvo-2xYgz8JA5RZssZytuq1Ud2RZPnp9xLKgW4Gl6WiarG8hNFjNLg8H67G5sj8RPplLF6NNL1QLXbj5LD0VLmFpqk3cY-Rs6-wWZ8LQGClsiLlhdX8_GSavTQv9EjOnWsdbDFdHPBZFoK_lU_GCtOy0DVRgRaOdIVeKytIt3vhXbiidT92NH17yQ9KfqNedanjGaDy8U8Lo9kKv4s=w480-h640-no"
  },
  ]

  render() {
    console.log(this.state.counter + ''+this.profiles.length) 
    return (
      <div className="App" >
         
         <div style={{display:"flex",}}>
         <img  onClick={this.decrement}  style={{flex:"1",height:"50px",width:"50px",margin:"auto"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTnKQNknvxZI3q7kaO_ph8Y09eefFYJC5exdLH-3pGt4RrAlei"/>
          <div style={{padding:"10px",backgroundColor:'rgba(0,0,0,1)',flex:"40",margin:"2px"}}>
          <Profiles name={this.profiles[this.state.counter].name} url={this.profiles[this.state.counter].url}/>          
          </div>      
          <img onClick={this.increment} style={{flex:"1",width:"50px",height:"50px",margin:"auto"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8BAQHo6Oi7u7tpaWlAQEArKyv6+vrw8PD8/Pzm5ubS0tLz8/PPz8+xsbGMjIyamppJSUnY2NhRUVHExMQ2Njaqqqo8PDxYWFgxMTFwcHChoaF7e3uDg4OSkpIfHx8VFRUMDAxFRUUkJCRiYmKAgIDz4962AAAESElEQVR4nO2diXbiMAxFK/Z9L3vpMvT/f3ECnSkQILFlJbJy3v2AVvcEYlmWxcsLAAAAAAAAAAAAAAAAAAAAAAAAAAAAQJlOTTuCYhlTwmZSWcs6/Wfd046lEPZ0xUE7mgIY0w2byj3GGaXZaYckTOPOkOZt7aBEuRdMWGhHJUjtoSF9a8clxxNDanW0I5PimSFRXTs0IZ4b0l47NhkyDOm1Ep/ULEOioXZ4AmQb0kQ7vnByDGmtHWAweYb0bv3LmGto/svoYGg8FXcxpK12lCE4GdKX4d2GmyF92i3hOBoaft84G9JIO1Qm7oY01o6Vh4chNbSDZeFjSFPtaDl4GdKfgXa8/vgZEtlbNXwNaaYdsS/ehuYqjf6G1kpUDENjew2Ooa0DKpahqUIjz9DSjpFpSEftwJ3hGtJcO3JX2IZmklS+ITW1Y3ejwzekV+3gnzPozRajyXi7XgX4JWy0RW5o1/5ZvYZZ3dDqamt1esP68rA/rj4EtfQVT1q75GG1CrJSUuz2+ovkaa03ZWiVqdiZnbzm72V7XVHQ66Y3HB22U0WvK+QXjWVD85E9YCUs+KBNSxvZBG6c/w/LRzINH2rLPEbwuL+opTsUsS3xTtvkKVKFDW2PDGTKUyNtjSxEioyS+wJ5BErFPW2HHMJPwifaCnkEH9vE/SE9EdgiNtCO34GwxpuFdvgOhO2lokxJ0wTlb2vt6J14CzDUjt0RfmtRWzt0V9h3w2Jf7y9wi1N97cCd4fa/W1gsfuAWbur5fzoWYAjD+GEa2nnTcIuL93eSY4W7WgQcuZcMO6nRDtwVfgtDrNXgNPz+zKN26G4E1IajL0Sd+eIL2lgu3kNOvU1sEMO6+UtvQ/AncDLKQTv+XPphgvHvgcNPLrQNclgGC0ZeMZW4vB918h1SKL0Q2C5ZJEIn+fHugsUuJ8aafcu1m0T6ECW7oqL8JoZk23fEWNsX7tqPL3UTv5bwpm2UoogW2tpit4+kfbbQNuhurV/fvTWmn1UVvKJ9amOffB8V+r0VriMMEtvRbrw/TsvQ3WhfKWnXZsP68uQ7bxWRDcV1LejlNA45EU4e8HfjuJK4bxL97bVuYhySBUYveCbgMEQ0VSsOvqGVa7JsQzNXnbmGdqbxMA0NjRzgGVoaGcUyNDXzk2Noa64Zw9DYCB5/w9DDl7LxNjT3wwKehh/2JtL6GW4MTvn0MrSSit7gY2hosNAVHoam5l9dwPzSX6wtg79gjvAPTe2iYQBOhna2uw9wMTS1WbrDwdDYXiJNruGnuVQ7RZ7h1PA75occQ5kuIFWyDY2Nm31IlqH5r+CZDEP7PzFz5rmh7VXwwlNDs5l2mieGVfoJxEp/Qs9sHwiamyyfyf2IVjMng64sU4JWqxUZ3PTJNe2VfB24eoqVesVcMdueu2uaE4M/QeJOu0IrIAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUx1/qekbwsXOU8gAAAABJRU5ErkJggg=="/>
         </div>
        </div>
    );
  }
}

export default App;
