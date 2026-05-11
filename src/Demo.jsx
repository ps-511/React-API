import axios from "axios";
import { useEffect, useState } from "react";
import { Common } from "./services/Common";

function Demo() {

  const [post, setPost] = useState([]);

  useEffect(() => {

    Common
      .then((res) => setPost(res.data));

  }, []);

  return (
    <div>
      <h1>API</h1>

      {
        post.map((item, index) => {
  // your code here

          return (
            <div key={index}>
              <p>{item.id}</p>
              <p>{item.title}</p>
            </div>
          );
        })
      }

    </div>
  );
}

export default Demo;