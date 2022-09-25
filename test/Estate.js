const {expect} = require('chai')
const {ethers} = require('hardhat')

describe('Realeastate',()=>{
    let RealEstateContract, EscrowContract
    let deplyer, seller
    let nftId = 1 

    beforeEach(async()=>{
        let account = await ethers.getSigners()
        deplyer = account[0]
        seller = deplyer

        const RealEstate = await  ethers.getContractFactory('RealEstate') 
        const Escrow = await ethers.getContractFactory('Escrow')

        // deploy contract
        RealEstateContract = await RealEstate.deploy()
        EscrowContract = await Escrow.deploy()
    })
    describe('deployment',async()=>{
        it('sends an NFT to the seller / deployer',async()=>{
            expect(await RealEstateContract.ownerOf(nftId)).to.equal(seller.address)
        })
    })
})