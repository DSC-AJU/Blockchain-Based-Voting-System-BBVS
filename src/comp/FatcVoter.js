import React from "react";
import { useState, useEffect } from "react";
function FatcVoter({ contract, account, provider }) {
  const [voters, setVoters] = useState([]);

  useEffect(() => {
    const Fatch = async () => {
      const Voters = await contract.getVoter();
      console.log(Voters);
      setVoters(Voters);
    };

    contract && Fatch();
  }, [contract]);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <p className="text-light h3">Voter's Information</p>
      {voters.map((voter) => {
        return (
          <div key={Math.random()}>
            <table>
              <tbody>
                <tr className="p-2">
                  {/* <td>{voter.Id.toString()}</td> */}
                  <td className="p-2">Voter {voter.name} </td>
                  <td className="p-2">VoterAddress {voter.voterAddress} </td>
                  <td className="p-2">Voted To {voter._CandidateAddress} </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}

export default FatcVoter;
