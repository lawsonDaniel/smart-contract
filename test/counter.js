const {expect} = require('chai');
const {ethers} = require('hardhat')

describe('Counter' ,()=>{
    let counter
    beforeEach(async()=>{
        const Counter =  await ethers.getContractFactory('Counter')
        counter  = await Counter.deploy('My Counter',1)
    })
    // check if the count is stored
        describe('Deployment',async()=>{
            it('stores the iniital count',async()=>expect(await counter.count()).to.equal(1))
            it('stores the iniital name',async()=> expect(await counter.name()).to.equal('My Counter'))
        })
        // check if its counting
        describe('Counting',async()=>{
            let added 
            beforeEach(async()=>{
                added = await counter.increment()
                added.wait()
            })
            it('should increase the count by 1',async()=> expect(await counter.count()).to.equal(2))

            it('should reduce the count by 1',async()=>{
                let subtract = await counter.decrement()
                await subtract.wait()
                expect(await counter.count()).to.equal(1)
               
                // oncase of exception
                expect(await counter.count()).to.be.reverted


            })
        })
    
})