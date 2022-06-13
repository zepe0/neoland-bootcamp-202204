const { connect, disconnect, Types: { ObjectId }} = require('mongoose')
const { User } = require('../models')
const { NotFoundError } = require('../errors')
const retrieveUser = require('./retrieveUser')
const { expect } = require('chai')

describe('Retrive User', () => {
    before(() => connect('mongodb://localhost:27017/test'))

    beforeEach(() => User.deleteMany())

    describe('when user already exists', () => {
        let user
        
        debugger
        it('succeeds on correct credentials', () => {

            user = new User({ name: 'Wendy Pan', username: 'wendypan', password: '123123123', rol: 'worker' })
            user.save()
            retrieveUser(user.id.toString())
                .then(userId => {
                    expect(userId.name).to.equal('Wendy Pan')
                    expect(userId.username).to.equal('wendypan')
                    expect(userId).to.equal(user.id)
                })
        })

          it('fails on incorrect password', () =>{
            let invalid = new ObjectId 
              retrieveUser(invalid)
              .then(() => { // () Devuelve el resultado igual pero como no lo voy a usar no lo declaro
                throw new Error('should not reach this point')
            })
            .catch(error => {  // Capta el error del authenticate y los expulsa por aqui
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal('wrong credentials')
            })
        }) 


        afterEach(() => User.deleteMany())

        after(() => disconnect())
    })
})