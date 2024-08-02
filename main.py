import random

from game_data import data

def assign():
    return random.choice(data)

def compare(p1, p2, user_input):
    ungur_energy1=p1['ungur_energy']
    ungur_energy2=p2['ungur_energy']

    answer=''

    if(ungur_energy1==ungur_energy2):
        answer=user_input
    if(ungur_energy1<ungur_energy2):
        answer='<'
    if(ungur_energy1>ungur_energy2):
        answer='>'
    
    if(user_input==answer):
        return True
    else:
        return False
    
def play():
    playing = True
    
    ungur1=assign()

    score=0

    while playing:
        ungur2=assign()
        while(ungur1==ungur2):
            ungur2=assign()
        
        print("Nume: " + ungur1['name'] + ", Descriere: " + ungur1['desc'])
        print("VS")
        print("Nume: " + ungur2['name'] + ", Descriere: " + ungur2['desc'])

        guess = input("<, > ? ")

        if compare(ungur1, ungur2, guess):
            score+=1
        else:
            playing = False
        
        ungur1=ungur2

        print("")
        print("------------------------------------------------------")
        print("")
    
    print("???")
    print("Scorul tau a fost: " + str(score))

play()