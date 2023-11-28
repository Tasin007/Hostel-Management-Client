

const MembershipCard = ({ membershipPackage }) => {
  return (
    <div className="card w-96 bg-amber-200 shadow-xl my-5 mx-auto">
      <div className="card-body text-center">
        <h2 className="card-title">{membershipPackage.name}</h2>
        <p>Price: ${membershipPackage.price}</p>
        <ul className="list-inside list-disc">
          {membershipPackage.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="card-actions justify-center mt-4">
          <a href={`.../checkout/${membershipPackage.name}`} className="btn btn-primary">Upgrade to {membershipPackage.name}</a>
        </div>
      </div>
    </div>
  );
};

export default MembershipCard
