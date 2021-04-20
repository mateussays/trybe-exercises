const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        };
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  };
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  };

  describe('testing with async/await', () => {

    describe('testing resolve', () => {
      it('GetUserName resolve', async () => {
        const getId = await getUserName(4);
        expect(getId).toEqual('Mark');
      })
    });

    describe('testing reject', () => {
      it('GetUserName reject', async () => {
        try {
          await getUserName(7);
        } catch (error) {
          expect(error).toEqual({  error: 'User with 7 not found.' });
        }
      });
    });
  });