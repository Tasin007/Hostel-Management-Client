import MembershipCard from "./MembershipCard";
import membershipPackages from "./membershipData";

const MembershipSection = () => {
  return (
    <div className="my-10">
        <h2 className="text-center text-3xl font-bold">Explore Our Membership Plans</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {membershipPackages.map((membershipPackage, index) => (
          <MembershipCard key={index} membershipPackage={membershipPackage} />
        ))}
      </div>
    </div>
  );
};

export default MembershipSection;
