import { ethers } from "ethers";
import Abi from "./erc721.json";

export const getNFTsContract = (providerOrSigner) =>
    new ethers.Contract(
        import.meta.env.VITE_contract_address,
        Abi,
        providerOrSigner
    );
