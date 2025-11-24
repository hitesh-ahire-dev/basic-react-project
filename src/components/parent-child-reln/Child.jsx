export default function Child({ dataFromParent, onButtonClick }) {
     
     return (
          <div>
               <h3>Data from parent : {dataFromParent}</h3>
               <button onClick={() => onButtonClick("New Data from Child")}>
                    Send Data to Parent
               </button>
          </div>
     )
}       
