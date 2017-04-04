var React=require('react')

module.exports=React.createClass({
    goGit:function () {
        window.open("https://github.com")
    },
    render:function () {
        return(
            <div>
                <button id="git" class="btn btn-success" onClick={this.goGit}>Github</button>
                <button id="add-question-btn" className="btn btn-success" onClick={this.props.onToggleForm}>添加问题</button>
            </div>

        )
    }
})