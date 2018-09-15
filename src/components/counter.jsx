import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //     value: this.props.counter.value
    //     };
        
        //     constructor(){
        //       super();
        //      this.handleIncrement = this.handleIncrement.bind(count :this.state.count + 1);
        //    };

            //  handleIncrement =()=> {
            //       this.setState({value:this.state.value + 1});
            //   };

            //   doHandleIncrement =( )=>{
            //       this.handleIncrement({ id:1});
            //   }
        
            render(){
                console.log(this.props);
              return(
            <div>
                {this.props.children}
            <span 
            className = {this.getBadgeClassses()} >
            {this.formatCount()} </span>
            <button 
            onClick= {() => this.props.onIncrement(this.props.counter) } 
            className="btn btn-secondary btn-sm">
            Increment
            </button>
            <button onClick={()=> this.props.onDelete(this.props.counter.id)} 
            className =' btn btn-danger btn-sm m-2'>Delete</button>
            </div>
            );
        };

        getBadgeClassses() {
            let classes = "badge m-2 badge-";
            classes += (this.props.counter.value === 0) ? "warning" : "primary";
            return classes;
        }

         formatCount() {
            const {value} = this.props.counter;
            return value === 0 ?  "Zero" : value;
       }
        
        
         handleIncrement() {
            console.log('Increment Clicked');
        };
    }
 
     export default Counter;



/*   

 renderTags(){
            if (this.state.tags.lenght === 0) return <p>There are no more tags </p>;
           
           return <ul>
                { this.state.tags.map(tag => <li key= {tag}>{ tag}</li>)}
            </ul>
             }
    
         render() { 
            return (
            <div>
                {this.state.tags.lenght === 0 && 'Please create a new tag'}
                {this.renderTags()}
            </div>

   );
     
    }


    getBadgeClassses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

        formatCount() {
            const {count} = this.state;
            return count === 0 ? <h1> Zero </h1>: count;
        }
  
  }

<ul>
    { this.state.tags.map(tag => <li key= {tag}>{ tag}</li>)}
           
               
            </ul>



*/

