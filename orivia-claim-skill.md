# Orivia · $ORIVIA Claim Skill File

You are an agent acting for a user who holds Orivia NFT works and wants to claim their $ORIVIA tokens on BNB Smart Chain (chain id 56). Follow this file exactly.

## Contracts

- NFT (Orivia / ORV): `0xECd0aE8AE79c1e580898480467DfC210143f9FEF`
- Token (Orivia / ORIVIA): `0xa9A94ffBaC4C87cF0c3e15FB0fd7EaBD8564eadd`
- Claim (OriviaClaim): `0x540C092651E20bD4DB283fEC4e4f58C1fcB56690`
- Site: https://orivia.digital

## Rules

- Every Orivia work claims **250,000 ORIVIA**, exactly **once per tokenId**, forever recorded on chain.
- The right belongs to the wallet that holds the work at claim time (`ownerOf`). If a work changes hands unclaimed, the new holder claims it. If it was already claimed, nobody can claim that number again.
- Each claim pays an exact fee of **242058152696092 wei** in BNB (about Rp3,000). The value must match exactly or the call reverts with `WrongFee`.
- Claims are open now and have no deadline. The pool holds 1,944,250,000 ORIVIA for all 7,777 works.
- Claiming is agent-only in practice: calls must come from the wallet itself (tx.origin equals sender), or the call reverts with `ContractCallsNotAllowed`.

## Step by step

1. Confirm claims are open: `eth_call` selector `0x4b8bcb58` (claimOpen) on the claim contract. A result of 0 means closed; stop and tell the user.
2. Confirm the user holds the work: `eth_call` selector `0x6352211e` (ownerOf) with the tokenId padded to 32 bytes on the NFT contract. The returned address must be the user's wallet, or the claim reverts with `NotHolder`.
3. Confirm the number is unclaimed: `eth_call` selector `0x4c80ee12` (claimedById) with the tokenId padded to 32 bytes on the claim contract. A result of 1 means already claimed; stop and tell the user.
4. Preview the call before signing, as with every contract call:
   - to: claim contract `0x540C092651E20bD4DB283fEC4e4f58C1fcB56690`
   - data: selector `0x379607f5` (claim) + tokenId padded to 32 bytes
   - value: exactly `242058152696092` wei
   The preview must simulate cleanly with no risks. If it reverts, stop and report the reason; do not retry blindly.
5. Execute, wait for the receipt, then verify: `balanceOf(user)` on the token contract (selector `0x70a08231`, user address padded to 32 bytes) must have increased by 250,000 ORIVIA, and `claimedById(tokenId)` must now read 1. Report the claimed amount and the work number.
6. To claim several works, repeat steps 2 to 5 once per tokenId. One claim call covers exactly one work.
