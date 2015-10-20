var GRAVATAR_URL = "http://gravatar.com/avatar";

var USERS = [
  {id: 1, name: "doug", email: "doug@kosmojo.com"},
  {id: 2, name: "suzie", email: "suzie@suziesemail.com"},
  {id: 3, name: "emily", email: "emily@kosmojo.com"}
]

// ************************************Render the code in html************************************* \\
var Gravatar = React.createClass({
    render: function() {
	     var users = this.props.users.map(function( u ) {
	        var hash = md5(u.email);
	        var size = 36;
	        var url = GRAVATAR_URL + "/" + hash + "?=" + size;
	      
	        return (
	        	<li> <img src={ url } /> { u.name } </li>
	        )
	     });

	        return (
		        <div>
		          <h1> Display Users and their gravatars! </h1>
		            <ul>
		               { users }
		            </ul>
		        </div>
	        );
    }
});

var App = React.createClass({
    render: function() {
        return (
          <div>
            <h1> Super Cool Gravatars!! </h1>
              <ul>
                <Gravatar users={ USERS }/>
              </ul>
          </div>
        );
    }
});

React.render(<App/>, document.body);