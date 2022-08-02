import { Link } from 'react-router-dom'
import './post.css'

export default function post() {
  return (
    <div className='post'>
        <img className='postImg' src="https://images8.alphacoders.com/123/thumb-1920-1231206.jpg" alt="" />
        <div className="postInfo">
              <div className="postCats">
                  <span className="postCat">Anime</span>
                  <span className="postCat">Cinema</span>
              </div>         
              <br />     
            <Link to='/post/1' className='link'>
            <span className="postTitle">Lorem ipsum dolor sit amet.</span>
            </Link>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi at deleniti necessitatibus in itaque laborum nulla commodi, quam dolore aspernatur odit deserunt magnam dolorum animi exercitationem atque, quos dicta amet!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi at deleniti necessitatibus in itaque laborum nulla commodi, quam dolore aspernatur odit deserunt magnam dolorum animi exercitationem atque, quos dicta amet!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi at deleniti necessitatibus in itaque laborum nulla commodi, quam dolore aspernatur odit deserunt magnam dolorum animi exercitationem atque, quos dicta amet!</p>
    </div>
  )
}
