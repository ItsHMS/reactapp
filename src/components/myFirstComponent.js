import '../test.css'
import {useState} from 'react'
function MyFirstComponent(properties) {
    let [count,updateCounting] = useState(0)
    let [firstName,updateFirstnameValue]=useState('')
    let [image,changeImage]=useState(null)
    let clickFunc=()=>{
        console.log("sjdhs")
        updateCounting(count+1)
    }
    function updatingName(event) {
        updateFirstnameValue(event.target.value)
    }
    function addImage(event){
        let file = event.target.files[0]
        if (file) {
            console.log(file);
            let reader = new FileReader()
            reader.onload = () => {
                const blob = new Blob([reader.result], { type: file.type });
        console.log('Blob:', blob);
                changeImage(reader.result)
              };
            reader.readAsDataURL(file);
        }
    }
    return(
        <div>
            <button type='button' onClick={clickFunc}>Click me</button>
            <p className='para'>{count+'abcd'+firstName+properties.name}</p>
            <input value={firstName} onChange={updatingName}/>
            <input type='file' accept='image/*' onChange={addImage}/>
            {image && <img src={image} />}
        </div>
    )
}
export default MyFirstComponent