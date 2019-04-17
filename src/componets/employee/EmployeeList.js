// import React, { Component } from 'react'


// export default class EmployeeList extends Component {
//     render() {
//         return (
//             <article>
//                 <h1>Employee List</h1>
//                 <section>Jessica Younker</section>
//                 <section>Jordan Nelson</section>
//                 <section>Zoe LeBlanc</section>
//                 <section>Blaise Roberts</section>
//             </article>
//         );
//     }
// }

import React, { Component } from 'react'
import { Link } from "react-router-dom"


class EmployeeList extends Component {
    render() {
        return (
            <section className="contact">
                {
                    this.props.employees.map(employee =>
                        <div key={employee.id}>
                            {employee.name}
                            <button
                                onClick={() => this.props.deleteItem("employees", employee.id)}
                                className="card-link">Delete</button>
                            <Link to={`/employees/${employee.id}`}>Detail</Link>
                        </div>
                    )
                }
            </section>
        )
    }
}

export default EmployeeList