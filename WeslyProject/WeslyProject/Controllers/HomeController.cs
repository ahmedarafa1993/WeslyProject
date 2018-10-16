using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WeslyProject.Models;

namespace WeslyProject.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            // hi there from index
            return View();
        }
        public ActionResult Index2()
        {
            // hi there from index
            return View();
        }

        public void FreeEstimate(string name, string email, int phone, string message, string code)
        {
            WaslyDBEntities waslyDB = new WaslyDBEntities();

            User user = new User();
            user.email = email;
            user.username = name;
            user.code = code;
            user.message = message;
            user.phone = phone;
            try
            {
                // hi there
                waslyDB.Users.Add(user);
                waslyDB.SaveChanges();
            }
            catch (Exception e)
            {

            }

        }
        public int LoadConsultation(string name, string email, string phone, string question)
        {

            WaslyDBEntities waslyDB1 = new WaslyDBEntities();

            Consultation consultation = new Consultation();
            consultation.email = email;
            consultation.name = name;
            consultation.phone = int.Parse(phone);
            consultation.question = question;

            try
            {
                waslyDB1.Consultations.Add(consultation);
                waslyDB1.SaveChanges();
                return 1;
            }
            catch (Exception e)
            {
                return 0;
            }
        }




    }
}