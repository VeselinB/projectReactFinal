import React from 'react';
import { Link } from 'react-router-dom'
import OfferingService from '../services/getOfferingService'




class Offering extends React.Component {
    state = {
        post: {},
        isEmpty: true,
    }
    static service = new OfferingService();



    // bookDetails = (event) => {

    //     const BookId = event.target.getAttribute('id');
    //     this.props.history.push(`/books/${BookId}`);
    //     console.log(this.props.history)


    // }

    test = (post) => {
        console.log(post);
    }


    render() {

        const { post } = this.state;
        this.test(post)
        const { imageUrl } = post;
        const { title } = post;
        const { content } = post;

        const { isEmpty } = this.state;


        if (isEmpty) {
            return null;
        } else {
            return (

                <section className="camps">

                    <ul>

                        <li key={""}>
                            <img src={`${imageUrl}`} alt="pic" />
                            <section className="more-info">
                                <section className="info">
                                    <div>
                                        <h3>{title}</h3>
                                        <p>{""}</p>
                                    </div>
                                    <div>

                                    </div>
                                </section>

                                <p>
                                    {content}
                                </p>
                                <Link to={`/camp/${""}`}> <button>ENROLL TODAY</button></Link>
                                {/* <Route path="/users/:id" component={UserPage}/> 
                                               this.props.match.params.id */}
                            </section>
                        </li>

                    </ul>
                </section>


            )
        }
    }
    async  componentDidMount() {
        try {
            const res = await Offering.service.getOffering(this.props.match.params.id);


            if (res !== 0) {
                this.setState(() => {
                    return {
                        isEmpty: false,
                        post: res.post,

                    }
                })
            }

        } catch (err) {

            console.log(err);
        }

    }
}



export default Offering;