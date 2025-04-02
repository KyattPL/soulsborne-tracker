import json


def create_name_strings():
    cat = ['Radial', 'Triangle', 'Waning', 'Circle', 'Droplet']

    first = ['']
    second = ['Lethal ']
    # first = ['', 'Odd ', 'Cursed ', 'Cursed Odd ']
    # second = ['Tempering ', 'Adept ', 'Arcane ', 'Bolt ', 'Fire ', 'Nourishing ',
    #           'Striking ', 'Finestrike ', "Fool's (ATK)", "Poorman's (ATK)", "Fool's (PATK)", "Poorman's (PATK)",
    #           'Heavy ', 'Sharp ', 'Warm ', 'Cold ', "Beasthunter's ", "Kinhunter's ", 'Dirty ', 'Murky ', 'Pulsing ', 'Radiant ']
    third = ['Damp ']
    # third = ['', 'Damp ', 'Abyssal ']
    tier = [' [1]', ' [2]', ' [3]', ' [4]', ' [5]', ' [6]']

    gems = []

    for c in cat:
        for f in first:
            for s in second:
                for t in third:
                    for num in tier:
                        if t == 'Abyssal ':
                            continue
                        elif t == '' and (num == ' [4]' or num == ' [5]' or num == ' [6]'):
                            continue
                        elif t == 'Damp ' and (num == ' [1]' or num == ' [2]' or num == ' [3]'):
                            continue

                        out = f + s + t
                        out_id = c.lower() + ' ' + f.lower() + s.lower() + t.lower()
                        if t == '':
                            out += 'Blood Gemstone' + num
                            out_id += 'blood gemstone' + num
                        else:
                            out += 'Blood Gem' + num
                            out_id += 'blood gem' + num

                        iconPath = ''
                        if f == 'Cursed ' or f == 'Cursed Odd ':
                            iconPath += 'cursed_'
                        iconPath += c.lower() + '_'

                        if s in ['Tempering ', 'Adept ', 'Nourishing ', 'Finestrike ', 'Heavy ', 'Sharp ', "Fool's (ATK)", "Poorman's (ATK)"]:
                            iconPath += '1_'
                        elif s in ['Warm ', "Beasthunter's "]:
                            iconPath += '2_'
                        elif s in ['Fire ', "Kinhunter's "]:
                            iconPath += '3_'
                        elif s == 'Bolt ':
                            iconPath += '4_'
                        elif s in ['Arcane ', 'Cold ']:
                            iconPath += '5_'
                        elif s in ['Striking ', "Fool's (PATK)", "Poorman's (PATK)", 'Pulsing ', 'Radiant ', 'Lethal ']:
                            iconPath += '6_'
                        else:
                            iconPath += '7_'

                        if t != 'Abyssal ':
                            iconPath += num[2]

                        gems.append({'id': out_id.replace(
                            ' ', '-'), 'name': out, 'category': c.lower(), 'icon': iconPath})

    with open("data.json", "w") as f:
        f.writelines(json.dumps(gems))


if __name__ == "__main__":
    create_name_strings()
