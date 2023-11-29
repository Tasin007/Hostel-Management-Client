import Swal from 'sweetalert2';

const UpcomingMealCard = ({ meal }) => {
    const handleLike = (id) => {
        fetch(`http://localhost:5000/upcomingMeals/like/${id}`, { method: 'PUT' })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'You liked the meal!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                    // Optionally, re-fetch or update the state to reflect the new likes count
                } else {
                    Swal.fire({
                        title: 'Oops!',
                        text: 'Something went wrong.',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    });
                }
            });
    };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out bg-white">
            <img className="w-full h-48 object-cover" src={meal.image} alt={meal.title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{meal.title}</div>
                <p className="text-gray-700 text-base">
                    {meal.description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Likes: {meal.likes}</span>
                <button onClick={() => handleLike(meal._id)} 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Like
                </button>
            </div>
        </div>
    );
};

export default UpcomingMealCard;
