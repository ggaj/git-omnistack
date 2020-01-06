const User = use('App/Models/User');

const Role = use('Adonis/Acl/Role');
const Permission = use('Adonis/Acl/Permission');

class DatabaseSeeder {
  async run() {
    const user = await User.create({
      name: 'Gildo Araujo',
      email: 'junioripg@gmail.com',
      password: '123456',
    });

    const createInvite = await Permission.create({
      slug: "invites_create",
      name: "Convidar Membros"
    })

    const createProject = await Permission.create({
      slug: "projects_create",
      name: "Criar Projetos"
    })

    const admin = await Role.create({
      slug: "administrator",
      name: "Administrador"
    })

    const moderator = await Role.create({
      slug: "moderator",
      name: "Moderador"
    })

    await Role.create({
      slug: "visitor",
      name: "Visitante"
    })

    admin.permissions().attach([createInvite.id, createProject.id])
    moderator.permissions().attach([createProject.id])

    const team = await user.teams().create({
      name: 'Rocketseat',
      user_id: user.id,
    });

    const teamJoin = await user.teamJoins().where('team_id', team.id).first()

    await teamJoin.roles().attach([admin.id])
  }
}

module.exports = DatabaseSeeder;
