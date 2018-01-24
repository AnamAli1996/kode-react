import React from 'react';
import axios from 'axios';
import image from '../../search-icon.png'


export default class CourseList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            courseList: [],
            search: "",
            courseId: ""
        };

    }

    componentDidMount(){
        axios.get("http://localhost:8080/api/course/allCourse")
            .then(res => {
                    const courseList = res.data;
                    console.log(courseList);
                    this.setState({courseList: courseList});
                }
            )
    }

    updateSearch(event) {
        this.setState({search: event.target.value});
        console.log(this.state.search)
    }

    myFunction(search) {
        console.log(search);
         axios.get("http://localhost:8080/api/course/" + search).then(res => {
            const courseId = res.data;
             console.log(res.data);
             this.setState({courseId: courseId});
             console.log(this.state.courseId);
             window.location.assign("/course/" + this.state.courseId);
         });

    }


    render(){

        let filteredContacts = this.state.courseList.filter(
            (course) => {
                return course.name.toLowerCase().indexOf
                        (this.state.search.toLowerCase()) !== -1;
            }
        );

        console.log(this.props.courseList);
        console.log(filteredContacts);
        let styles ={
            width: "20px",
            height: "20px"
        };
        return(


            <div>

                <div>
                    <label> Search for Course </label>
                </div>
                <div>
                    <input type="text"
                           value={this.state.search}
                           onChange={this.updateSearch.bind(this)}/>

                        <button onClick={() => this.myFunction(this.state.search)}><img  src={image} style={styles} alt="my image"/></button>

                </div>
                <div>
                    <h1>Course List</h1>
                    <ul>
                        {filteredContacts.map((course) =>
                            <dl key = {course.id}>
                                <dd>Course name = {course.name } </dd>
                                <dd>Description =   {course.description }</dd>
                                <dd>Price = {course.price}</dd>
                                -------------------------------------------
                            </dl>
                        )}
                    </ul>
                </div>
            </div>
        );
    }

}
