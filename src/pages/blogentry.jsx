import React from 'react'
import Layout from "../components/Layout"

const blogentry = () => {
    return(
        <Layout>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="primary mb-4">Blog Entry</h1>
                    </div>
                </div>
                <div className="row">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam egestas lacus in sollicitudin auctor. In hac habitasse platea dictumst. Nam vitae porttitor velit. Etiam placerat purus sit amet interdum lobortis. Vestibulum at massa tincidunt, pretium libero at, eleifend diam. In finibus metus blandit nunc fringilla vestibulum. Donec condimentum neque vel mauris rhoncus, id lobortis lorem rutrum. Curabitur massa tellus, mollis vehicula diam ac, sollicitudin ultrices ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec diam nulla, egestas vitae rutrum ut, malesuada finibus neque. Vestibulum vel pellentesque dolor.</p>

                <p>Nullam vitae massa pellentesque, lacinia dolor in, congue magna. Nullam suscipit laoreet tempus. Nunc id nunc elit. Vivamus luctus efficitur consectetur. Aliquam sed hendrerit dolor. Duis nec purus efficitur est luctus luctus vel et sem. Nulla pulvinar lectus blandit erat fermentum semper. Ut scelerisque risus a velit efficitur feugiat. Nulla leo mauris, posuere vel feugiat in, tempor vel nisl. Phasellus.</p>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus justo vel porttitor bibendum. Cras gravida, lectus eu blandit pharetra, sapien neque tempor nisl, id sollicitudin purus metus vitae dolor. Nullam in tempor lectus. Aenean imperdiet non risus eu euismod. In hac habitasse platea dictumst. In hac habitasse platea dictumst.</p>
                </div>
            </div>
        </Layout>
    )
}

export default blogentry