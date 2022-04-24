import { useRouter } from "next/router";
const WorkEelement = function () {
  const router = useRouter();
  console.log(router);
  return <div>element</div>;
};

export default WorkEelement;
