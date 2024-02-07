const { User, Day } = require('../models')

const resolvers = {
    Query: {
        viewUsers: async () => {
            return await User.find();
        }
    },

    Mutation: {
        addUser: async (_, args) => {
            const user = await User.create(args);
            return user
        },
        addDay: async (_, args) => {
            const day = await Day.create(args);
            const user = await User.findOneAndUpdate(
                { _id: args.user },
                { $push: { days: day._id.toString() } },
                { new: true }
            );
            return day
        }
    }
};

module.exports = resolvers;