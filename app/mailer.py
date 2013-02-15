from mailsnake import MailSnake
from mailsnake.exceptions import *

#new mailchimp object
#call api methods with mailchimp object
ms = MailSnake('happy_joy', )
try:
    ms.ping() # returns "Everything's Chimpy!"
except MailSnakeException:
    print 'An error occurred. :('

# print ms.lists()

