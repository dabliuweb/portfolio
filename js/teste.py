class Dev:
    def __init__(self, name, age, exp, skills):
        if not isinstance(skills, list):
            raise TypeError('skills deve ser uma lista!')

        self.name = name
        self.age = age
        self.exp = exp
        self.skills = skills

    def learn_tecnology(self, techs):
        if not isinstance(techs, list):
            raise TypeError('techs deve ser uma lista!')

        for tech in techs:
            self.skills.append(tech)

name = 'Douglas Lelis'
age = 31
exp = 'Programador desde 2017'
skills = ['PHP', 'Python', 'Node.js', 'Angular']
dev = Dev(name, age, exp, skills)
dev.learn_tecnology(['Vue.js', 'React.js'])

print(f"Skills de {dev.name}: {dev.skills}")