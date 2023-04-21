import React from "react";
import {Link} from "react-router-dom";


const PostItem = (
  {
    post={ iconImage :"elon-musk.jpg",
      userName: 'Elon Musk',
      subName: '@elonmusk',
      time: '23h',
      text: 'Amazing show about @Inspiration4x mission!',
      image: '../../images/inspire.jpg',
      title: 'Countdonw: Inspiration4 Mission to Space | Netflix Offical Site',
      description: 'From training to lauch to landing, this all-access docuseries rides along' +
        'with the Inspiration4 crew on the first all-civilian orbital space...',
      linkImage: '',
      link: 'netflix.com',
      linkIcon: '<i class="fas fa-paperclip text-secondary ps-2 pe-1"></i>',
      comment: '4.2k',
      share: '3.5k',
      love: '37.5k',
      upload: '',
      hyperlink : "@Inspiration4"
    }
  }
) => {
  return(
    <li className="list-group-item">
      <div className="row">
        <div className="col-1 ps-2" >
          <img height={40} width={40} className="rounded-pill" alt={"item-img"} src={`/images/${post.iconImage}`} />
        </div>
        <div className="col-11 ">
          <div className=" fw-bolder">
            {post.userName} <i className="bi bi-check-circle-fill ps-1 pe-1" style={{color: 'blue'}}></i>
            <span className="text-secondary fw-normal wd-text-post-small">{post.subName} · {post.time}</span>
          </div>
          <div className="fw-bolder pt-1 pb-2">
            {post.text}
            <Link to={post.hyperlink}/>
          </div>


          <div>
            <div>
              <img className=" border-bottom rounded-top pt-0 border-secondary " alt={"icon-img"} src={`/images/${post.image}`} height={300} width={530} />
            </div>
            <div className="fw-bolder pe-1 fs-6">
              {post.title}

            </div>
            <div className="text-secondary pe-1  wd-text-post-small">
              {post.description}

            </div>
            <div className="text-secondary wd-text-post-small">
              {!(post.link ==='')&&<i className="bi bi-link-45deg"></i>}
              <a href={post.hyperlink}>{post.link}</a>
            </div>
          </div>

          <div className="d-flex justify-content-sm-between">

            <i className={"bi bi-chat ps-1 pt-2 text-secondary"}>
              <label className=" ps-1 pe-5 text-secondary" >{post.comment}</label>
            </i>

            <i className={"bi bi-repeat ps-1 pt-2 text-secondary"}>
              <label className=" ps-1 pe-5 text-secondary">{post.shared}</label>
            </i>

            <i className={"bi bi-heart ps-1 pt-2 text-secondary"}>
            <label className=" ps-1 pe-5 text-secondary">{post.shared}</label>
            </i>

            <i className={"bi bi-upload ps-1 pt-2 text-secondary"}/>

          </div>
        </div>
      </div>
    </li>

  );

}

export default PostItem;