import { CommonIconsI } from "./icons.interface";

export const TypescriptSvg = ({ className = "" }: CommonIconsI) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      fill="currentColor"
      version="1.1"
      height="1em"
      width="1em"
      viewBox="0 0 512 512"
    >
      <path d="M357.3333435,402c-16.9334412-1.5552368-38.666687-4.8333435-59.6703491-27.7719421v47.1900024C336.25,446.5,402.6143799,441.8963928,425.75,411.75c13.75-17.9166565,19.4166565-41.916687,9.23703-69.0989685C411,294.3333435,354,291.3333435,337.4240112,260.822052c-18.3130493-49.4179993,57.2120056-58.3470612,93.4979858-25.0540161V191.40802c-15.4605103-9.9848022-40.0437927-11.0576477-57.2894897-10.1263733c-45.5117188,2.4576416-76.0947266,28.9013672-75.6384888,68.293396c-1.9606934,54.9865112,60.8295288,69.1448669,92.3589783,94.5920105C411.7661133,362.3370361,410.233429,406.4017029,357.3333435,402z M177.6419983,433.5140076V220.0250092h-68.7779999v-35.3029938h175.6549835v35.303009h-68.92099v213.4890137L177.6419983,433.5140076z M480,32v448H32V32H480z M512,0H0v512h512V0z" />
    </svg>
  );
};
