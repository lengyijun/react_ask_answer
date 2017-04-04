var React=require('react')

module.exports=React.createClass({
    goGit:function () {
        window.open("https://github.com/sjtu-lyj/react_ask_answer")
    },
    render:function () {
        return(
            <div class="addbutton">
                <button id="git" type="button" className="btn btn-secondary pull-right" onClick={this.goGit}>Github</button>
                <button id="add-question-btn" className="btn btn-success pull-right" onClick={this.props.onToggleForm}>添加问题</button>
            </div>

        )
    }
})