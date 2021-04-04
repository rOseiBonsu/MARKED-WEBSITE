
marked.setOptions({breaks: true})
const renderer = new marked.Renderer();

class App extends React.Component{
	constructor(props){
		super(props)
		this.state = {text:""}
		this.handleTextChange= this.handleTextChange.bind(this)

	}
	
    handleTextChange(event){
	 this.setState({text: event.target.value})
	}

	render(){
		return (
			<div className="text-center px-4">
			<h3 className="p-2 mystyle"> My Markdown Previewer <span id="tlft">by Richmond Osei Bonsu</span></h3>
			<textarea name="text" id="text" row="30" value= {this.state.text}className="textarea" onChange={this.handleTextChange}/>
			<h3 className="mt-3"> Output </h3>
			<Preview markdown={this.state.text} />
			</div>
			)
	}

	}
	
	function Preview({markdown}){
		return (
			<div dangerouslySetInnerHTML={{__html: marked(markdown, {renderer: renderer}),}}  id="preview" >
			</div>
		)

	}
	
	



ReactDOM.render(<App />, document.getElementById("newDiv"));