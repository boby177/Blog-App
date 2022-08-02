import './singlepost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src="https://animenewsandfacts.com/wp-content/uploads/2022/04/spy-x-family-episode-2-release-date.webp" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Lorem, ipsum dolor sit amet.
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author: <b>Bob</b></span>
                <span className='singlePostDate'> 1 hour ago </span>
            </div>
            <p className='singlePostDesc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam ullam sapiente voluptas inventore, quisquam deserunt eum vero neque eveniet unde provident voluptates commodi placeat ducimus explicabo quidem. Officia, corrupti. Placeat!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam ullam sapiente voluptas inventore, quisquam deserunt eum vero neque eveniet unde provident voluptates commodi placeat ducimus explicabo quidem. Officia, corrupti. Placeat!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam ullam sapiente voluptas inventore, quisquam deserunt eum vero neque eveniet unde provident voluptates commodi placeat ducimus explicabo quidem. Officia, corrupti. Placeat!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam ullam sapiente voluptas inventore, quisquam deserunt eum vero neque eveniet unde provident voluptates commodi placeat ducimus explicabo quidem. Officia, corrupti. Placeat!</p>
        </div>
    </div>
  )
}
