import React from "react";

function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "John Deo",
      role: "Customer",
      image: "/OIP.jpg",
      stars: 5,
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem natus nesciunt labore molestiae delectus rem porro, vero itaque laudantium dolore doloribus odit? Quibusdam temporibus provident.",
    },
    {
      id: 2,
      name: "Scarlet Joseph",
      role: "Customer",
      image: "/OIP (4).jpg",
      stars: 4,
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem natus nesciunt labore molestiae delectus rem porro, vero itaque laudantium dolore doloribus.",
    },
    {
      id: 3,
      name: "Vector Hoff",
      role: "Customer",
      image: "/OIP (3).jpg",
      stars: 5,
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem natus nesciunt labore molestiae delectus rem porro, vero itaque laudantium dolore doloribus.",
    },
  ];

  return (
    <div className="review" id="reviews">
      <h1>
        Customer's <span>Review</span>
      </h1>

      <div className="box-1">
        {reviews.map((review) => (
          <div className="review-1" key={review.id}>
            <div className="part-1">
              {[...Array(review.stars)].map((_, index) => (
                <i key={index} className="bi bi-star-fill"></i>
              ))}
            </div>

            <div className="part-2">
              <p>{review.review}</p>
            </div>

            <div className="part-3">
              <div className="profile-1">
                <img src={review.image} alt={review.name} />

                <h3>
                  {review.name}
                  <br />
                  <span>{review.role}</span>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;